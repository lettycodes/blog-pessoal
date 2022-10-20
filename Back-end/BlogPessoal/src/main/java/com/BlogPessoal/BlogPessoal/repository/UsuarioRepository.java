package com.BlogPessoal.BlogPessoal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BlogPessoal.BlogPessoal.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{ // Jpa vai fazer a comunicação com o nosso banco de dados
	// Nós extendemos a JPA porque dentro dela tem todos os métodos criados, aqueles que usamos no banco de dados, e podemos também criar novos métodos específicos, além dos padrões

	public Optional<Usuario> findByUsuario(String usuario); // pesquisa por um usuário específico
	
	public List <Usuario> findAllByNomeContainingIgnoreCase(String nome);
	
}
