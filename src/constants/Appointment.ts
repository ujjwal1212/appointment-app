export default class Appointment {
    private companyID: string;
    private serviceID: string;
    private selectedDate: Date;
    private selectedTime: any;
    private selectedEmployee: any;

    constructor({
        companyID,
        serviceID,
        selectedDate,
        selectedTime,
        selectedEmployee
    }: any){
        this.companyID = companyID;
        this.serviceID = serviceID;
        this.selectedDate = selectedDate;
        this.selectedEmployee = selectedEmployee;
        this.selectedTime = selectedTime;
    }

    public getCompanyId(){
        return this.companyID;
    }
    public getServiceID(){
        return this.serviceID;
    }
    public getDate(){
        return this.selectedDate;
    }
    public getEmployee(){
        return this.selectedEmployee;
    }
    public getTime(){
        return this.selectedTime;
    }
    
}