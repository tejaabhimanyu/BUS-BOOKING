package bus.booking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Busdetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="code")
	int code;
	@Column(name="source")
	String source;
	@Column(name="destination")
	String destination;
	@Column(name="time")
	String time;
	@Column(name="price")
	int price;
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Busdetails() {
		
		// TODO Auto-generated constructor stub
	}
	public Busdetails(long id, int code, String source, String destination, String time, int price) {
		super();
		this.id = id;
		this.code = code;
		this.source = source;
		this.destination = destination;
		this.time = time;
		this.price = price;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
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
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Busdetails [code=");
		builder.append(code);
		builder.append(", source=");
		builder.append(source);
		builder.append(", destination=");
		builder.append(destination);
		builder.append(", time=");
		builder.append(time);
		builder.append("]");
		return builder.toString();
	}

}
