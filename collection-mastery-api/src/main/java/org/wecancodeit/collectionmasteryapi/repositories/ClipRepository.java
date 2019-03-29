package org.wecancodeit.collectionmasteryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.collectionmasteryapi.models.Clip;

@Repository
public interface ClipRepository extends CrudRepository<Clip, Long> {

}
