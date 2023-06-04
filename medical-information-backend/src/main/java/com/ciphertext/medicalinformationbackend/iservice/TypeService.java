package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;

import java.util.List;

/**
 * @author Sadman
 */
public interface TypeService {
    List<Type> getAllTypes();
    Type getTypeById(int id) throws RecordNotFoundException;
}
