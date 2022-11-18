FROM  node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./

ENV MONGO_URL=mongodb+srv://Yash0244:Yash0244@cluster0.rbb7x1b.mongodb.net/?retryWrites=true&w=majority
ENV JWTSECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=AKIAUDJIPE4VBRVX47OA
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=932453660217-8tqku6gvc1uif785m415tuur8a9iseka.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

RUN npm run build

CMD [ "npm", "run", "start" ]