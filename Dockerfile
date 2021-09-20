# Dockerfile
FROM python:3.9-slim
RUN apt-get update -y
COPY /backend/api /app
WORKDIR /app
RUN pip install Flask
RUN pip install --upgrade google-cloud-firestore
RUN pip install flask-cors
ENTRYPOINT ["python"]
CMD ["api.py"]
RUN test_api.py