class AppBase {
    static DOMAIN_SERVER = "http://localhost:3310";

    static DOMAIN_API = this.DOMAIN_SERVER + "";

    static API_CUSTOMER = this.DOMAIN_SERVER + "/customers";

    static SweetAlert = class {
        static showDeleteConfirmDialog() {
            return Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
        }

        static showSuccessAlert(t) {
            Swal.fire({
                icon: 'success',
                title: t,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })
        }

        static showErrorAlert(t) {
            Swal.fire({
                icon: 'error',
                title: 'Warning',
                text: t,
            })
        }

        static showError401() {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'Invalid credentials!',
            })
        }

        static showError403() {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'You are not authorized to perform this function!',
            })
        }
    }
}



class Customer {
    constructor(id, fullName, email, phone, balance, deleted) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.balance = balance;
        this.deleted = deleted;
    }
}

class Deposit {
    constructor(id, fullName, transactionAmount) {
        this.id = id;
        this.fullName = fullName;
        this.transactionAmount = transactionAmount;
    }
}
class Withdraw {
    constructor(id, fullName, transactionAmount) {
        this.id = id;
        this.fullName = fullName;
        this.transactionAmount = transactionAmount;
    }
}

class Transfer {
    constructor(idSender, idRecipient  , transactionAmount){
        this.idSender = idSender;
        this.idRecipient = idRecipient;
        this.transactionAmount = transactionAmount
    }
}
