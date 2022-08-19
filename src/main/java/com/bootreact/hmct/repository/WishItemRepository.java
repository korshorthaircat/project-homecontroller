package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishItemId;

public interface WishItemRepository extends JpaRepository<WishItem, WishItemId>{

}
