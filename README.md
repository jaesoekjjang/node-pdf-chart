## Docker에서 테스트

```bash
docker build -t <tag> .
docker run -v $PWD/pdf:/app/pdf -it <tag> /bin/bash #🚨 node-canvas는 운영체제에 영향을 받기 때문에 프로젝트 루트 디렉터리를 bind mount 하지 않도록 주의합니다.
npm run dev <name>
```

## 로컬 설치

### Prerequisite

[cairo](https://github.com/Automattic/node-canvas?tab=readme-ov-file#compiling)가 로컬 PC에 설치되어 있어어야 합니다.

```bash
npm i
npm run dev <name>
```
