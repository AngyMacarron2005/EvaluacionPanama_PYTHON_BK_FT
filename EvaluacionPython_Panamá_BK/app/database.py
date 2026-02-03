from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# CAMBIA ESTO por tu usuario y contraseña de Postgres
# formato: postgresql://usuario:password@localhost/nombre_db
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:1234@localhost:5432/mi_base_datos"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependencia que usaremos en las rutas para abrir/cerrar la DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()