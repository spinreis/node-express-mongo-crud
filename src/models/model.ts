export default interface Model <Data extends object> {
    create(data: Data): Promise<Data>;
    getOne(id: string | undefined): Promise<Data | null>;
    getAll(): Promise<Data[]>;
    update(id: string | undefined, data: Data): Promise<Data | null>;
    delete(id: string | undefined): Promise<Data | void>;
}