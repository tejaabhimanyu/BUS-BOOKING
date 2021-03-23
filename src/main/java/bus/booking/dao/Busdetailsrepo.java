package bus.booking.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import bus.booking.models.Busdetails;

public interface Busdetailsrepo extends JpaRepository<Busdetails, Integer> {
	
	@Query("from Busdetails where source=:abc and destination=:def")
	public List<Busdetails> search(@Param("abc") String s,@Param("def") String d);
	

}
