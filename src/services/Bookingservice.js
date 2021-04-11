import axios from 'axios';

const BOOKINGS_API_BASE_URL="http://localhost:7777/api/v1/bookings";

class Bookingservice {
    getbookings()
    {
        return axios.get(BOOKINGS_API_BASE_URL);   
    }

    plan(booking)
    {
        return axios.post(BOOKINGS_API_BASE_URL,booking);
    }
    adminlogin(name,pass)
    {
        return axios.post(BOOKINGS_API_BASE_URL + '/'+name+'/'+pass);
    }
    addbus(booking)
    {
        return axios.post(BOOKINGS_API_BASE_URL+'/addbus',booking);
    }
    userlogin(username,password){
        return axios.get(BOOKINGS_API_BASE_URL+'/userlogin/'+username+'/'+password);
    }
    usersignup(user){
        return axios.put(BOOKINGS_API_BASE_URL+'/signup',user);
    }
    search(source,destination){
        return axios.get(BOOKINGS_API_BASE_URL+'/search/'+source+'/'+destination);
    }
    userbooking(username){
        return axios.get(BOOKINGS_API_BASE_URL+'/getusernamebookings/'+username);
    }
    deleteBooking(bookingId){
        return axios.delete(BOOKINGS_API_BASE_URL+'/' +bookingId);
    }
  

    getBookingById(bookingid){
        return axios.get(BOOKINGS_API_BASE_URL + '/' +bookingid);
    }


}

export default new Bookingservice()