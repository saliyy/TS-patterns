class DataBaseConnection {
    private static connection: DataBaseConnection;

    private constructor() {}

    public static getInstance() {
        if (!this.connection) {
            this.connection = new DataBaseConnection()
        }

        return this.connection
    }
}


const db = DataBaseConnection.getInstance()

