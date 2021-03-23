package bus.booking.service;

import java.util.List;

import bus.booking.models.Bookings;
import bus.booking.models.Busdetails;
import bus.booking.models.Users;

public interface Bookinginterface {
	List<Bookings> getall();
	String plantravel(Bookings boo);
	String adminlogin(String u,String p);
	String addbus(Busdetails b);
	String userlogin(String username,String password);
	String usersignup(Users user);
	List<Busdetails> search(String s,String d);

}
