package com.joseph.social_lite.data.repository;

import com.joseph.social_lite.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
