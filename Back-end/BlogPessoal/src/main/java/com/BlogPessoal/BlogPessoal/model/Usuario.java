package com.BlogPessoal.BlogPessoal.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;

@Entity // informa que se trata de uma entidade e que se tornará uma tabela
@Table(name = "tb_usuarios") // cria e nomeia a tabela
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "O atributo é obrigatório") // notblank pra letra e notnull para números
	private String nome; //not null não pode deixar nulo, mas posso deixar em branco / not blank -> não pode deixar nulo nem em branco

	@Schema(example = "email@email.com.br")
	@NotBlank(message = "O atributo é obrigatório")
	@Email(message = "O e-mail tem que ser um e-mail válido")
	private String usuario;
	
	@NotBlank(message = "O atributo é obrigatório")
	@Size(min = 8, message = "A senha deve ter no mínimo 8 caracteres")
	private String senha;

	private String foto;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE) // OneToMany Cria uma relação 1 para muitos (1 usuário para muitas postagens) 
	// mappedBy vai mapear por usuário cascade -> toda a cascata de postagens relacionada a esse usuario será removida se esse usuário for removido
	@JsonIgnoreProperties("usuario") // para o retorno do Json, ignore essa propriedade ("nome da propriedade que poderia entrar em loop infinito")
	private List<Postagem> postagem; // traz uma lista (array) de postagens

	public Usuario(Long id, String nome, String usuario, String senha, String foto) {
		this.id = id;
		this.nome = nome;
		this.usuario = usuario;
		this.senha = senha;
		this.foto = foto;
	}

	public Usuario() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
	
}
