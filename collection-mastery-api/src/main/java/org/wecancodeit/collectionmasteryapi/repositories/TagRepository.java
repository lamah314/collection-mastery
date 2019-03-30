package org.wecancodeit.collectionmasteryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.collectionmasteryapi.models.Tag;

@Repository
public interface TagRepository extends CrudRepository<Tag, Long> {

	Tag findByTag(String tag);

}
