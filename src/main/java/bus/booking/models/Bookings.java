package bus.booking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="Bookings")
public class Bookings {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="username")
	String username;
	@Column(name="source")
	String source;
	@Column(name="destination")
	String destination;
	@Column(name="date")
	String date;
	@Column(name="noofpassengers")
	int noofpassengers;
	@Column(name="buscode")
	int buscode;
	public Bookings() {
		
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getNoofpassengers() {
		return noofpassengers;
	}
	public void setNoofpassengers(int noofpassengers) {
		this.noofpassengers = noofpassengers;
	}
	public int getBuscode() {
		return buscode;
	}
	public void setBuscode(int buscode) {
		this.buscode = buscode;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Bookings [username=");
		builder.append(username);
		builder.append(", source=");
		builder.append(source);
		builder.append(", destination=");
		builder.append(destination);
		builder.append(", date=");
		builder.append(date);
		builder.append(", noofpassengers=");
		builder.append(noofpassengers);
		builder.append(", buscode=");
		builder.append(buscode);
		builder.append("]");
		return builder.toString();
	}
	public Bookings(String username, String source, String destination, String date, int noofpassengers, int buscode) {
		super();
		this.username = username;
		this.source = source;
		this.destination = destination;
		this.date = date;
		this.noofpassengers = noofpassengers;
		this.buscode = buscode;
	}
	

}
