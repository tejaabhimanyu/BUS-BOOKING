package bus.booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import bus.booking.models.Users;
@Repository
public interface Usersrepo extends JpaRepository<Users, Integer> {
	@Query("from Users where username =:abc and password =:def")
	public Users userlogin(@Param("abc") String username,@Param("def") String password);

}
