package com.ciphertext.medicalinformationbackend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Sadman
 */
@Getter
@Setter
@Entity
@Table(name="time-slots")
public class TimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "doctor_workplace_id")
    private DoctorWorkplace doctorWorkplace;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "day_id")
    private Day day;

    @Column(name = "start_datetime")
    private Date startDateTime;

    @Column(name = "end_datetime")
    private Date endDateTime;
}
