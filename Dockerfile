FROM python:3.9-slim

COPY backend/ app/
WORKDIR /app
RUN pip install --upgrade google-cloud-firestore

CMD python3 api.py