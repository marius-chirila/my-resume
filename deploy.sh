GOOGLE_PROJECT_ID=myresumeonline

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/myapi \
--project=$GOOGLE_PROJECT_ID

gcloud beta run deploy myapi \
  --image gcr.io/$GOOGLE_PROJECT_ID/myapi \
  --platform managed \
  --region europe-west3 \
  --project=$GOOGLE_PROJECT_ID