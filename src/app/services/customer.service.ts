import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {
      baseUrl: string = 'http://crudapiservice.azurewebsites.net/api/'

    constructor(private _http: Http) { }

    getCustomers(){
      return this._http.get(this.baseUrl + 'customers')
                .map((response: Response) =>response.json())
                .catch(this._errorHandler);
    }

    getCustomerById(id){
      return this._http.get(this.baseUrl +"Customers/"+ id)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    saveCustomer(customer){
      return this._http.post(this.baseUrl +   'customers', customer)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    deleteCustomer(id){
      return this._http.delete(this.baseUrl + "Customers/" + id)
                .map((response:Response) =>  response.json())
                .catch(this._errorHandler)
    }

    _errorHandler(error:Response){debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
}
