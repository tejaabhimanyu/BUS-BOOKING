package bus.booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import bus.booking.models.Bookings;
@Repository
public interface Bookingrepo extends JpaRepository<Bookings, Integer> {
	



}
