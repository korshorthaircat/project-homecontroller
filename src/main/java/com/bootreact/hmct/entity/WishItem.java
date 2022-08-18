package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_WISHITEM")
@Data
@DynamicInsert

public class WishItem {

}
