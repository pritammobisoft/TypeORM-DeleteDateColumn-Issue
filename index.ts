import "reflect-metadata"
import { createConnection, Connection } from "typeorm"
import { Photo } from "./entity/photo"

let connection: Connection

export async function connect() {
    return await createConnection()
}

; (async () => {
    connection = await createConnection()

    const photo = new Photo()
    photo.name = 'test1'
    photo.createdAt = new Date()
    photo.updatedAt = new Date()

    connection.transaction(async (manager) => {
        await manager.save(photo)
    })

    connection.transaction(async (manager) => {
        await manager
            .createQueryBuilder()
            .softDelete()
            .from(Photo, 'p')
            .where("p.name = :name", { name: 'test1' })
            .execute();
    })

    connection.transaction(async (manager) => {
        const p = await await manager
        .createQueryBuilder()
        .select('p')
        .from(Photo, 'p')
        .where('p.name = :name and p.deletedAt IS NULL', { name: 'test1' })
        .getOne()

        console.log('p', p)
    })
})()

