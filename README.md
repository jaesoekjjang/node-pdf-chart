## 테스트 방법

```bash
docker build -t <tag> .
docker run -v $PWD/pdf:/app/pdf -it <tag> /bin/bash #🚨 node-canvas는 운영체제에 영향을 받기 때문에 프로젝트 루트 디렉터리를 bind mount 하지 않도록 주의합니다.
npm run dev <file-name>
```
