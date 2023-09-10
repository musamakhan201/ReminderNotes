package com.reminder.notes.domain;


import lombok.*;

import javax.persistence.*;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Data
@Entity
@Table(name = "notes")
public class Notes {

    private static final String DATETIME_FORMAT = "yyyy-MM-dd HH:mm:ss";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String description;
    @Column(columnDefinition="DATETIME")
    private String created_at;

    public Notes() {
        ZonedDateTime utc = ZonedDateTime.now(ZoneOffset.UTC);
        created_at = utc.format(DateTimeFormatter.ofPattern(DATETIME_FORMAT));
    }
}
