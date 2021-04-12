package bus.booking.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import bus.booking.models.Bookings;
@Repository
public interface Bookingrepo extends JpaRepository<Bookings, Long> {
	@Query("from Bookings where username =:abc ")
	public List<Bookings> f(@Param("abc")String username);

	



}
