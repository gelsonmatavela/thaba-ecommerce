create table gerente(
codigo_ger int(10) not null,
nome text,
sobrenome text,
nivelEducacional text default null,
email text,
palavra_passe text,
primary key(codigo_ger)
);



create table telefoneGerente(
codigo_tel integer auto_increment not null,
codigo_ger int(10) not null,
telefone text default null,
primary key(codigo_tel, codigo_ger),
foreign key(codigo_ger) references gerente(codigo_ger)
);

create table localizacaoGerente(
    codigo_local integer auto_increment not null,
    codigo_ger int(10) not null,
    rua text default null,
    bairro text default null,
    cidade text default null,
    provincia text default null,
    pais text default null,
    primary key(codigo_local, codigo_ger),
    foreign key(codigo_ger) references gerente(codigo_ger)
);

create table departamento(
    codigo_dept int(10) not null,
    codigo_ger int(10) not null,
    nome text default null,
    plano_producao text default null,
    plano_compras text default null,
    primary key(codigo_dept),
    foreign key(codigo_ger) references gerente(codigo_ger)
);



create table trabalhador(
    codigo_trab int(10) not null,
    codigo_dept int(10) not null,
    nome text default null,
    sobrenome text default null,
    email text default null,
    palavra_passe text default null,
    primary key(codigo_trab),
    foreign key(codigo_dept) references departamento(codigo_dept)
);

create table telefoneTrabalhador(
    codigo_tel integer auto_increment not null,
    codigo_trab int(10) not null,
    telefone text default null,
    primary key(codigo_tel, codigo_trab),
    constraint foreign key(codigo_trab) references trabalhador(codigo_trab)
);

create table localizacaoTrabalhador(
    codigo_local integer auto_increment not null,
    codigo_trab int(10) not null,
    rua text default null,
    bairro text default null,
    cidade text default null,
    provincia text default null,
    pais text default null,
    primary key(codigo_local, codigo_trab),
    constraint foreign key(codigo_trab) references trabalhador(codigo_trab)
);

create table cliente(
    codigo_cliente int(10) not null,
    nome text default null,
    sobrenome text default null,
    email text default null,
    palavra_passe text default null,
    fotoPerfil text default null,
    fotoCapa text default null,
    primary key(codigo_cliente)
);

create table telefoneCliente(
    codigo_tel integer auto_increment not null,
    codigo_cliente int(10) not null,
    telefone text default null,
    primary key(codigo_tel, codigo_cliente),
    constraint foreign key(codigo_cliente) references cliente(codigo_cliente)
);

create table localizacaoCliente(
    codigo_local integer auto_increment not null,
    codigo_cliente int(10) not null,
    rua text default null,
    bairro text default null,
    cidade text default null,
    provincia text default null,
    pais text default null,
    primary key(codigo_local, codigo_cliente),
    constraint foreign key(codigo_cliente) references cliente(codigo_cliente)
);

-- create table fotoPerfilCliente(
--     codigo_perfil integer auto_increment not null,
--     codigo_cliente int(10) not null,
--     foto_perfil varchar(255) default null,
--     data_criada timestamp,
--     primary key(codigo_perfil, codigo_cliente),
--     foreign key(codigo_cliente) references cliente(codigo_cliente)
-- );

-- create table fotoPerfilGerente(
--     codigo_perfil integer auto_increment not null,
--     codigo_ger int(10) not null,
--     foto_perfil varchar(255) default null,
--     data_criada timestamp,
--     primary key(codigo_perfil, codigo_ger),
--     foreign key(codigo_ger) references gerente(codigo_ger)
-- );

-- create table fotoCapaCliente(
--     codigo_capa integer auto_increment not null,
--     codigo_cliente int(10) not null,
--     foto_capa varchar(255) default null,
--     data_criada timestamp,
--     primary key(codigo_capa, codigo_cliente),
--     foreign key(codigo_cliente) references cliente(codigo_cliente)
-- );

-- create table fotoCapaGerente(
--     codigo_capa integer auto_increment not null,
--     codigo_ger int(10) not null,
--     foto_capa varchar(255) default null,
--     data_criada timestamp,
--     primary key(codigo_capa, codigo_ger),
--     foreign key(codigo_ger) references gerente(codigo_ger)
-- );

create table produto(
    codigo_prod int(10) not null,
    codigo_dept int(10) not null,
    nome text default null,
    marca text default null,
    material text default null,
    quantidade int default null,
    preco float default null,
    primary key(codigo_prod),
    foreign key (codigo_dept) references departamento(codigo_dept)
);



create table compra(
    codigo_compra int(10) not null,
    codigo_cliente int(10) not null,
    codigo_prod int(10) not null,
    dia timestamp not null, 
    primary key(codigo_compra, codigo_cliente, codigo_prod),
    foreign key(codigo_cliente) references cliente(codigo_cliente),
    foreign key(codigo_prod) references produto(codigo_prod)
);

create table bolsa(
    codigo_bolsa int(10) not null,
    codigo_prod int(10) not null,
    tipo_fecho text(10) not null,
    primary key(codigo_bolsa),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table mochila(
    codigo_mochila int(10) not null,
    codigo_prod int(10) not null,
    cor text default null,
    numero_bolsos int default null,
    quantidade float default null,
    primary key(codigo_mochila, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table malaInformativa(
    codigo_info int(10) not null,
    codigo_prod int(10) not null,
    numero_bolsos int default null,
    dimensao text default null,
    primary key(codigo_info, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table malaLeptop(
    codigo_laptop int(10) not null,
    codigo_prod int(10) not null,
    numero_bolsos int default null,
    dimensao text default null,
    primary key(codigo_laptop, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table sacoViagem(
    codigo_viagem int(10) not null,
    codigo_prod int(10) not null,
    dimensao text default null,
    primary key(codigo_viagem, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table carteira(
    codigo_carteira int(10) not null,
    codigo_prod int(10) not null,
    tipo_fecho text default null,
    primary key(codigo_carteira, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);

create table capaCelular(
    codigo_capinha int(10) not null,
    codigo_prod int(10) not null,
    tipo_fecho text default null,
    primary key(codigo_capinha, codigo_prod),
    constraint foreign key(codigo_prod) references produto(codigo_prod)
);


