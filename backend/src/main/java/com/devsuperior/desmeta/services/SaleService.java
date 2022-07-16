package com.devsuperior.desmeta.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.desmeta.entities.Sale;
import com.devsuperior.desmeta.repositories.SaleRopository; 
@Service
public class SaleService {
	@Autowired 
	private SaleRopository repository;
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
