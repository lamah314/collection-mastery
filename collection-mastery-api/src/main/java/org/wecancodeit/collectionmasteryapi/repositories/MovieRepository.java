package org.wecancodeit.collectionmasteryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.collectionmasteryapi.models.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {

	Movie findByName(String name);

}
