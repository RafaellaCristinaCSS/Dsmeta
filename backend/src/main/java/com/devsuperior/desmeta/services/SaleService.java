package com.devsuperior.desmeta.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.desmeta.entities.Sale;
import com.devsuperior.desmeta.repositories.SaleRopository; 
@Service
public class SaleService {
	@Autowired 
	private SaleRopository repository;
	public Page<Sale> findSales(Pageable pageable) {
		return repository.findAll(pageable);
	}
}
