## 테스트 방법

### Prerequisite

환경에 따라 미리 설치되어있어야 할 것들입니다.
- Docker 사용: [docker](https://www.docker.com/get-started/)
- 로컬에 설치: [cairo](https://github.com/Automattic/node-canvas?tab=readme-ov-file#compiling)

### Docker에서 테스트
```bash
docker-compose up
docker-compose exec pdf /bin/bash
npm run dev <name> # npm run dev pepe -> /pdf/pepe.pdf 생성
```

### 로컬 설치
``` bash
$ ... # cairo 설치
npm i
npm run dev <name>
```
로컬에 설치하여 사용하는 경우, [docker-compose.yml](./docker-compose.yml)의 주석을 풀어 `node_modules`, `package-lock.json`이 bind mount되지 않도록 해주어야 합니다.

