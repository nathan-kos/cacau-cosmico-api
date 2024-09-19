-- Inserindo chocolates
INSERT INTO public."Chocolate"(
	"cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
VALUES 
('85b23e33-1fc8-405b-bc2f-d26e7ef12a1d', 'Cometa Doce', 'Uma barra de chocolate com cristais de açúcar que lembram a cauda de um cometa.', 12.50, 'https://confeiteiro.agilecdn.com.br/12345.png', true, 100, now(), now()),

('30c86cdd-3a11-4679-8e77-e927f4cc46b4', 'Nebulosa de Trufas', 'Trufas macias com recheio de chocolate branco e polvilhadas com confeitos coloridos.', 15.00, 'https://confeiteiro.agilecdn.com.br/12346.png', true, 50, now(), now()),

('4b871583-1685-41e7-a4df-a96e8c02ca67', 'Planeta de Bombons', 'Bombons recheados de licor, perfeitos para uma jornada galáctica de sabores.', 10.00, 'https://confeiteiro.agilecdn.com.br/12347.png', true, 75, now(), now()),

('5e3ab1f6-92ac-4c7a-876b-6ee9f21c6628', 'Anel de Saturno', 'Chocolate ao leite com um toque de amendoim, fazendo referência aos anéis de Saturno.', 8.50, 'https://confeiteiro.agilecdn.com.br/12348.png', true, 30, now(), now()),

('727b7526-6d1b-4bf5-8a43-cc64a0b5f2dd', 'Buraco Negro', 'Um bombom recheado de chocolate amargo com um núcleo doce e irresistível.', 9.00, 'https://confeiteiro.agilecdn.com.br/12349.png', true, 25, now(), now());

-- Inserindo categorias para cada chocolate

-- Categorias para Cometa Doce
INSERT INTO public.categoria_chocolate(
	"cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
VALUES 
('c9be2ae2-a2f0-42aa-9d43-4092273354d8', '85b23e33-1fc8-405b-bc2f-d26e7ef12a1d', 'BARRA', now(), now()),
('300c4542-262e-429e-9e0e-2dbada806525', '85b23e33-1fc8-405b-bc2f-d26e7ef12a1d', 'CONFETE', now(), now());

-- Categorias para Nebulosa de Trufas
INSERT INTO public.categoria_chocolate(
	"cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
VALUES 
('7f21e72e-ddba-42b3-b7a8-4d427b56cb24', '30c86cdd-3a11-4679-8e77-e927f4cc46b4', 'TRUFA', now(), now()),
('c078f3aa-e3f7-46ee-a523-facdc3229f12', '30c86cdd-3a11-4679-8e77-e927f4cc46b4', 'CONFEITADO', now(), now());

Categorias para Planeta de Bombons
INSERT INTO public.categoria_chocolate(
	"cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
VALUES 
('9eef16f8-16f8-4cd7-a5f3-c43a97e2805f', '4b871583-1685-41e7-a4df-a96e8c02ca67', 'BOMBOM', now(), now()),
('3eef71f8-44a3-471d-a5f3-876dbd36d7d8', '4b871583-1685-41e7-a4df-a96e8c02ca67', 'LICOR', now(), now());

-- Categorias para Anel de Saturno
INSERT INTO public.categoria_chocolate(
	"cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
VALUES 
('72bd18f7-8124-4567-b7f8-cb2d87e28f4d', '5e3ab1f6-92ac-4c7a-876b-6ee9f21c6628', 'AO_LEITE', now(), now()),
('89a78f4b-7512-4bbd-97f3-cbd9e28c87f4', '5e3ab1f6-92ac-4c7a-876b-6ee9f21c6628', 'AMENDOIM', now(), now());

-- Categorias para Buraco Negro
INSERT INTO public.categoria_chocolate(
	"cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
VALUES 
('cd2b18f7-987b-4567-b7f8-dab3f8e87a5b', '727b7526-6d1b-4bf5-8a43-cc64a0b5f2dd', 'BOMBOM', now(), now()),
('da3f17f8-6713-4cda-947f-a3d7e36f5a9b', '727b7526-6d1b-4bf5-8a43-cc64a0b5f2dd', 'AMARGO', now(), now());

-- Chocolate 1
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('90f597a8-cf32-4130-8378-29b8a2c85046', 'Eclipse de Chocolate Branco', 'Uma barra especial de chocolate branco com detalhes que lembram um eclipse lunar.', 8.50, 'https://confeiteiro.agilecdn.com.br/eclipse_branco.png', true, 100, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('f1a86b55-f76b-4b7f-880c-26b7cfdc9d10', '90f597a8-cf32-4130-8378-29b8a2c85046', 'BARRA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('4b88f7cd-7858-4b08-92b4-20e6a5c4779a', '90f597a8-cf32-4130-8378-29b8a2c85046', 'BRANCO', now(), now());

-- Chocolate 2
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('5a592fff-5102-4cb6-8430-c839d83c7612', 'Bombom Estrela Cadente', 'Bombom recheado com caramelo e uma pitada de licor que derrete na boca.', 3.00, 'https://confeiteiro.agilecdn.com.br/bombom_estrela.png', true, 15, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('2e5f4f8d-5f2e-4b4a-b992-d4de4892d1c7', '5a592fff-5102-4cb6-8430-c839d83c7612', 'BOMBOM', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('94a0a9c3-8f29-4f3d-8d75-509c78782489', '5a592fff-5102-4cb6-8430-c839d83c7612', 'LICOR', now(), now());

-- Chocolate 3
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('e9d17106-7e63-4548-9e5b-e0ba738febe3', 'Planeta Trufado', 'Uma trufa gigante com camadas de chocolate amargo e recheio de frutas vermelhas.', 9.50, 'https://confeiteiro.agilecdn.com.br/planeta_trufado.png', true, 30, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('73d2a02e-290d-4f83-861f-7f60cf26fa26', 'e9d17106-7e63-4548-9e5b-e0ba738febe3', 'TRUFA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('1a0918cd-0745-49c4-8b3e-6b6b98f7c5f1', 'e9d17106-7e63-4548-9e5b-e0ba738febe3', 'AMARGO', now(), now());

-- Chocolate 4
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('f9597999-74ab-42e9-8fb4-4456c7723211', 'Cinturão de Asteroides', 'Uma barra de chocolate ao leite com amêndoas e confeitos crocantes.', 12.00, 'https://confeiteiro.agilecdn.com.br/cinturao_asteroides.png', true, 150, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('223ba8c2-e9f4-4f9d-bb12-620b6e63b3be', 'f9597999-74ab-42e9-8fb4-4456c7723211', 'BARRA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('5a193894-c0a0-47da-b9d4-f6b579c9e178', 'f9597999-74ab-42e9-8fb4-4456c7723211', 'AO_LEITE', now(), now());

-- Chocolate 5
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('af29eb85-38f7-4e47-af3d-bc0cb40485dd', 'Supernova', 'Uma caixa de bombons variados, inspirada nas explosões cósmicas, com sabores diversos.', 25.00, 'https://confeiteiro.agilecdn.com.br/supernova.png', true, 300, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('87b3e7a1-82e7-456b-80ab-c48f7dfe08be', 'af29eb85-38f7-4e47-af3d-bc0cb40485dd', 'CAIXA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('264cce5e-f3bb-42a3-9c9a-8f6fa7b06e97', 'af29eb85-38f7-4e47-af3d-bc0cb40485dd', 'BOMBOM', now(), now());
-- Chocolate 1
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('08ef6c5d-3e2c-4647-944a-3e1f7e2f5ae7', 'Nebulosa de Caramelo', 'Chocolate recheado com um centro cremoso de caramelo, envolvido em chocolate ao leite.', 6.50, 'https://confeiteiro.agilecdn.com.br/nebulosa_caramelo.png', true, 120, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('5ff84a14-1f61-48e4-a5cc-cdc00901c56b', '08ef6c5d-3e2c-4647-944a-3e1f7e2f5ae7', 'RECHEADO', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('2f8cd7dc-7503-4037-8581-d597f05f27e6', '08ef6c5d-3e2c-4647-944a-3e1f7e2f5ae7', 'CARAMELO', now(), now());

-- Chocolate 2
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('61f3d3c6-e529-4323-8f6f-d154a896c37e', 'Astro Amêndoa', 'Chocolate crocante com pedaços de amêndoa torrada, uma explosão de sabor em cada mordida.', 7.00, 'https://confeiteiro.agilecdn.com.br/astro_amendoa.png', true, 90, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('af4ad4f8-8b38-4db1-9ca6-5e4d156fb015', '61f3d3c6-e529-4323-8f6f-d154a896c37e', 'BARRA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('327f9372-2d7c-4480-88b9-34e8a6826479', '61f3d3c6-e529-4323-8f6f-d154a896c37e', 'CROCANTE', now(), now());

-- Chocolate 3
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('afd2b027-914f-4f14-9fa3-f15a8a8dc592', 'Via Láctea de Menta', 'Chocolate ao leite com recheio cremoso de menta, refrescante como uma viagem pela galáxia.', 6.00, 'https://confeiteiro.agilecdn.com.br/via_lactea_menta.png', true, 80, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('56a6b340-9d7b-40e5-b09c-bd1c1bdeef3a', 'afd2b027-914f-4f14-9fa3-f15a8a8dc592', 'RECHEADO', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('90fc3a91-c743-4a55-b27b-f493bb98f019', 'afd2b027-914f-4f14-9fa3-f15a8a8dc592', 'MENTA', now(), now());

-- Chocolate 4
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('48b73224-21a4-4c17-928a-c6d56f88b3da', 'Cometa Crocante', 'Uma barra de chocolate amargo com pedaços crocantes de castanhas e nozes.', 9.00, 'https://confeiteiro.agilecdn.com.br/cometa_crocante.png', true, 110, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('80df47ad-088b-4b92-8b68-3ab4bb6d1d4a', '48b73224-21a4-4c17-928a-c6d56f88b3da', 'BARRA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('56e5c83a-fbd0-48ab-87d4-89f174a82ebf', '48b73224-21a4-4c17-928a-c6d56f88b3da', 'AMARGO', now(), now());

-- Chocolate 5
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('90db7f56-9c73-4d5c-b8df-71f649a2a64f', 'Meteorito de Nozes', 'Chocolate ao leite com pedaços de nozes caramelizadas, oferecendo uma combinação perfeita de doce e crocante.', 8.00, 'https://confeiteiro.agilecdn.com.br/meteorito_nozes.png', true, 95, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('7b9387e8-56f0-4af2-a848-0831d029a639', '90db7f56-9c73-4d5c-b8df-71f649a2a64f', 'BARRA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('ed6f1fa3-7fc5-4573-a6e7-3f0ae3a1a303', '90db7f56-9c73-4d5c-b8df-71f649a2a64f', 'AO_LEITE', now(), now());

INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('f1a79238-75ae-4e60-a2cb-f68049e0e107', 'Anel de Saturno', 'Chocolate em formato de anel com recheio de avelã e cobertura de chocolate amargo.', 10.50, 'https://confeiteiro.agilecdn.com.br/anel_saturno.png', true, 85, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('a6f19380-9e0d-46db-9b40-98cf80957227', 'f1a79238-75ae-4e60-a2cb-f68049e0e107', 'RECHEADO', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('5bca20da-10b5-438f-8b4d-18b5f9d6cc3e', 'f1a79238-75ae-4e60-a2cb-f68049e0e107', 'AVELA', now(), now());

-- Chocolate 2
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('4e1238ba-9212-44a4-85b4-5c3f4bcff53c', 'Supernova de Chocolate Branco', 'Barra de chocolate branco com pedaços crocantes de biscoito.', 6.80, 'https://confeiteiro.agilecdn.com.br/supernova_chocolate_branco.png', true, 100, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('b7e17db6-bc13-43a3-b091-776ab7bfc4b2', '4e1238ba-9212-44a4-85b4-5c3f4bcff53c', 'BRANCO', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('a6d0f367-3da0-4d4f-9e5d-058e2c145b6c', '4e1238ba-9212-44a4-85b4-5c3f4bcff53c', 'CROCANTE', now(), now());

-- Chocolate 3
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('27c11da4-4517-4b4f-a96b-2d7b2639c762', 'Planeta Trufa de Frutas Vermelhas', 'Uma trufa recheada com ganache de frutas vermelhas envolta em chocolate ao leite.', 8.20, 'https://confeiteiro.agilecdn.com.br/planeta_trufa_frutas_vermelhas.png', true, 90, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('79f1e74e-1b56-497b-89aa-3a972dc9243f', '27c11da4-4517-4b4f-a96b-2d7b2639c762', 'TRUFA', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('f972e8b7-2344-4854-bdbf-b7d5c9a90a80', '27c11da4-4517-4b4f-a96b-2d7b2639c762', 'FRUTAS_VERMELHAS', now(), now());

-- Chocolate 4
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('c8f22b36-cbc2-4be7-85ba-7b4c9e739a7c', 'Cosmos de Coco', 'Barra de chocolate branco com recheio cremoso de coco.', 7.00, 'https://confeiteiro.agilecdn.com.br/cosmos_coco.png', true, 95, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('329cd9fa-24f5-4e3b-8df7-02b68e3e034f', 'c8f22b36-cbc2-4be7-85ba-7b4c9e739a7c', 'BRANCO', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('17b2f6b2-d7f3-46a5-9b5c-94e74a1fe073', 'c8f22b36-cbc2-4be7-85ba-7b4c9e739a7c', 'COCO', now(), now());

-- Chocolate 5
INSERT INTO public."Chocolate"(
    "cho_Id", "cho_Nome", "cho_Descricao", "cho_Valor", "cho_Imagem", "cho_Ativo", "cho_Peso", "cho_CriadoEm", "cho_AtualizadoEm")
    VALUES ('f0e5c0b6-65f6-48b9-a745-85c540a8f717', 'Galáxia de Nozes e Mel', 'Chocolate ao leite com nozes e um toque de mel.', 8.90, 'https://confeiteiro.agilecdn.com.br/galaxia_nozes_mel.png', true, 105, now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('5d79c6d3-924e-4f4e-bb0c-230ac73d2e3c', 'f0e5c0b6-65f6-48b9-a745-85c540a8f717', 'AO_LEITE', now(), now());

INSERT INTO public.categoria_chocolate(
    "cch_Id", cch_cho_id, "cch_Categoria", "cch_CriadoEm", "cch_AtualizadoEm")
    VALUES ('d3c4a67b-e36e-4623-bc25-cfaef9589ff5', 'f0e5c0b6-65f6-48b9-a745-85c540a8f717', 'NOZES', now(), now());


-- usuário
INSERT INTO public."User"(
	"usu_Id", "usu_Nome", "usu_Email", "usu_Senha", "usu_Telefone", "usu_CPF", "usu_Nasc", usu_pap, "usu_Ativo", "usu_Genero", "usu_CriadoEm", "usu_AtualizadoEm")
	VALUES ('55da48c6-a149-4b82-81ec-4739b60570ff', 'Nathan KS', 'principal@email.com', '$2b$08$mzNBBEYiOGrI1qo6F8DvIuFpfF34iUVTq3xgQKpBhDh9s2p7PX9RK', '3456546456423', '15389745346', '2001-11-11', 'USER', TRUE, 'MASCULINO', NOW(), now());

    -- cartão desse usuário
INSERT INTO public.cartao(
	"car_Id", "car_Nome", "car_Numero", "car_Validade", "car_CVV", car_usu_id, "car_Bandeira", "car_CriadoEm", "car_AtualizadoEm", "car_Ativo", "car_Apelido")
	VALUES ('eb3bfab0-395d-4caa-b766-2c3ecd51701a', 'Nathan KS', '923840923840293', '10/2026', '3333', '55da48c6-a149-4b82-81ec-4739b60570ff', 'MASTERCARD', now(), now(), true, 'Cartão Principal');

    -- endereço desse usuário
INSERT INTO public."Endereco"(
	"end_Id", "end_Rua", "end_Numero", "end_Bairro", "end_CEP", "end_Complemento", "end_Tipo", end_usu_id, "end_CriadoEm", "end_AtualizadoEm", "end_Cidade", "end_UF", "end_Ativo", "end_Apelido", "end_Cobranca", "end_Entrega")
	VALUES ('cc5c0c2f-391f-439d-956e-fb6227d6fd55', 'Mauricio de Souza', '46', 'literario', '98498539 ', 'Palmeiras', 'RESIDENCIAL', '55da48c6-a149-4b82-81ec-4739b60570ff', now(), now(), 'Suzano', 'SP', true, 'Casa', true, true);

-- Pedido
INSERT INTO public."Pedido"(
	"ped_Id", ped_usu_id, "ped_Status", "ped_ValorTotal", "ped_Ativo", ped_end_id, "ped_Frete", "ped_CriadoEm", "ped_AtualizadoEm")
	VALUES ('6e94c38a-6b19-4912-b43e-a9386d16b113', '55da48c6-a149-4b82-81ec-4739b60570ff', 'PAGAMENTO_REALIZADO', 40, true, 'cc5c0c2f-391f-439d-956e-fb6227d6fd55', 5, now(), now());

-- Itens do pedido
INSERT INTO public.chocolate_pedido(
	"chp_Id", chp_ped_id, chp_cho_id, "chp_Quantidade", "chp_CriadoEm", "chp_AtualizadoEm")
	VALUES ('f0867e11-8d86-4330-94a3-3eb8ee49197d', '6e94c38a-6b19-4912-b43e-a9386d16b113', '85b23e33-1fc8-405b-bc2f-d26e7ef12a1d', 2, now(), now());

INSERT INTO public.chocolate_pedido(
	"chp_Id", chp_ped_id, chp_cho_id, "chp_Quantidade", "chp_CriadoEm", "chp_AtualizadoEm")
	VALUES ('6f9509bd-8f60-4ade-918f-b016e2abef9d', '6e94c38a-6b19-4912-b43e-a9386d16b113', '4b871583-1685-41e7-a4df-a96e8c02ca67', 1, now(), now());

-- cartão pedido
INSERT INTO public.cartao_pedido(
	"cap_Id", cap_ped_id, cap_car_id, "cap_Valor", "cap_CriadoEm", "cap_AtualizadoEm")
	VALUES ('d76d044e-fda2-466b-bc11-04219741cc73', '6e94c38a-6b19-4912-b43e-a9386d16b113', 'eb3bfab0-395d-4caa-b766-2c3ecd51701a', 40, now(), now());