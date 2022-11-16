class DataBaseConnection {
    private static connection: DataBaseConnection;

    private constructor() {}

    public static getInstance() {
        if (!this.connection) {
            return new DataBaseConnection()
        }

        return this.connection
    }
}