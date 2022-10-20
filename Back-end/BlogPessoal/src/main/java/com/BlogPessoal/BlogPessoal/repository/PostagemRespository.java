package com.BlogPessoal.BlogPessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.BlogPessoal.BlogPessoal.model.Postagem;

@Repository
public interface PostagemRespository extends JpaRepository<Postagem, Long> {

	public List <Postagem> findAllByTituloContainingIgnoreCase(@Param("titulo") String titulo);
}
