package org.wecancodeit.collectionmasteryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.collectionmasteryapi.models.Actress;

@Repository
public interface ActressRepository extends CrudRepository<Actress, Long> {

	Actress findByName(String name);

}
