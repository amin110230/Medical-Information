package com.ciphertext.medicalinformationbackend.model;

import com.ciphertext.medicalinformationbackend.enums.DegreeType;
import com.ciphertext.medicalinformationbackend.enums.OrganizationType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="degree")
public class Degree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="abbreviation", nullable = false)
    private String abbreviation;

    @Enumerated(EnumType.STRING)
    @Column(name = "degree_type", nullable = false)
    private DegreeType degreeType;
}
