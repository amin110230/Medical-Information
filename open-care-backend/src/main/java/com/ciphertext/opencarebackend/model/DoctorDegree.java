package com.ciphertext.opencarebackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author Sadman
 */
@Getter
@Setter
@Entity
@Table(name="doctor-degrees")
public class DoctorDegree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "degree_id")
    private Degree degree;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "speciality_id")
    private MedicalSpeciality medicalSpeciality;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "institution_id")
    private Institution institution;

    @Column(name = "start_datetime")
    private Date startDateTime;

    @Column(name = "end_datetime")
    private Date endDateTime;

    @Column(name = "grade")
    private String grade;

    @Column(name = "description")
    private String description;
}
