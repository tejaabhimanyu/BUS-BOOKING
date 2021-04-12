package bus.booking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bus.booking.dao.Adminrepo;
import bus.booking.dao.Bookingrepo;
import bus.booking.dao.Busdetailsrepo;
import bus.booking.dao.Usersrepo;
import bus.booking.models.Bookings;
import bus.booking.models.Busdetails;
import bus.booking.models.Users;
@Service
public class Bookingservice implements Bookinginterface{
	@Autowired
	private Bookingrepo b;
	@Autowired
	private Adminrepo r;
	@Autowired
	private Busdetailsrepo v;
	@Autowired
	private Usersrepo u;

	@Override
	public List<Bookings> getall() {
		// TODO Auto-generated method stub
		return b.findAll();
	}

	@Override
	public String plantravel(Bookings boo) {
		// TODO Auto-generated method stub
		String x="unsuccessful";
		try {
			b.save(boo);
			x="success";
		}  catch(Exception e1){
			e1.printStackTrace();
			
		}
		return x;
	}
	@Override
	public String adminlogin(String name,String pass)
	{
		String y="username or password incorrect";
		if(r.admin(name, pass) != null)
		{
			y="login successful";
		}
		return y;
	}

	@Override
	public String addbus(Busdetails b) {
		// TODO Auto-generated method stub
		String x="unsuccess";
		try {
			v.save(b);
			x="success";
		}catch(Exception e){
			e.printStackTrace();
			
		}
		
		return x;
	}

	@Override
	public String userlogin(String username, String password) {
		// TODO Auto-generated method stub
		String y="username or password incorrect";
		if(u.userlogin(username, password) != null)
		{
			y="login successful";
		}
		return y;
	}

	@Override
	public String usersignup(Users user) {
		// TODO Auto-generated method stub
		String x="not registered";
		try {
			u.save(user);
			x="registered successfully";
		}catch(Exception e){
			e.printStackTrace();
			
		}
		return x;
	}

	@Override
	public List<Busdetails> search(String s, String d) {
		// TODO Auto-generated method stub
		return v.search(s, d);
	}
	@Override
	public List<Bookings> getusernamebookings(String username)
	{
		// TODO Auto-generated method stub
		return b.f(username);
	}



	
	

}
