class New_Error extends Error {
    public statusCode : number
    public status : "Client side error" | "Server side error"

    constructor(message: string, statusCode: number | undefined){
        super(message)

        this.statusCode = statusCode || 500;
        this.status = this.statusCode.toString().startsWith('4')?"Client side error":"Server side error";

    }
}

export default New_Error 