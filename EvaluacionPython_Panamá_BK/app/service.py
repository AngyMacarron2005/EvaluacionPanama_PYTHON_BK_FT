
from pydantic import BaseModel
from typing import Optional

class MatriculaBase(BaseModel):
    placa: str
    propietario: str
    marca: str
    fabricacion: int
    valor_comercial: float
    impuesto: float
    codigo_revision: str

class MatriculaCreate(MatriculaBase):
    pass


class MatriculaUpdate(BaseModel):
    placa: Optional[str] = None
    propietario: Optional[str] = None
    marca: Optional[str] = None
    fabricacion: Optional[int] = None
    valor_comercial: Optional[float] = None
    impuesto: Optional[float] = None
    codigo_revision: Optional[str] = None   
class Matricula(MatriculaBase):
    pass
class Config:
    from_attributes = True