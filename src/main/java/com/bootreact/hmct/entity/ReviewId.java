package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class ReviewId implements Serializable{
    private int reviewNo;
    private int order;
}
