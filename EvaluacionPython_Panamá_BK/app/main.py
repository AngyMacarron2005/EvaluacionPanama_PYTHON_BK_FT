from typing import List

from fastapi import FastAPI
from . import schemas, database, service

app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Matricula Vehicular CRUD FastAPI")

def get_matricula_service(db: Session = Depends(database.get_db)):
    return service.MatriculaService(db)
@app.get("/api/matriculas", response_model=List[schemas.Matricula])
def read_matriculas(service: service.MatriculaService = Depends(get_matricula_service)):
    return service.get_all()

@app.get("/api/matriculas/{placa}", response_model=schemas.Matricula)
def read_matricula(placa: str, service: service.MatriculaService = Depends(get_matricula_service)):
    db_matricula = service.get_by_placa(placa)
    if db_matricula is None:
        raise HTTPException(status_code=404, detail="Matricula no encontrada")
    return db_matricula

@app.post("/api/matriculas", response_model=schemas.Matricula, status_code=status.HTTP_201_CREATED)
def create_matricula(matricula: schemas.MatriculaCreate, service: service.MatriculaService = Depends(get_matricula_service)):
    try:
        return service.create(matricula)
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))

@app.put("/api/matriculas/{placa}", response_model=schemas.Matricula)
def update_matricula(placa: str, matricula: schemas.MatriculaUpdate, service: service.MatriculaService = Depends(get_matricula_service)):
    db_matricula = service.update(placa, matricula)
    if db_matricula is None:
        raise HTTPException(status_code=404, detail="Matricula no encontrada")
    return db_matricula

@app.delete("/api/matriculas/{placa}")
def delete_matricula(placa: str, service: service.MatriculaService = Depends(get_matricula_service)):
    if not service.delete(placa):
        raise HTTPException(status_code=404, detail="Matricula no encontrada")
    return {"message": "Matricula eliminada exitosamente"}

if __name__== "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)  