GOCD_PIPELINE_CONFIG_FILE := $(or ${GOCD_PIPELINE_CONFIG_FILE}, ${PROJECT}.gocd.yaml)

infra_docker_login:
	@docker login -u $(ARTIFACTORY_USER) -p $(ARTIFACTORY_PASSWORD)

generate_template: infra_docker_login
	docker run --rm \
        -v $(MOUNT_DIR):/home/gola \
        gola_release_scripts:latest \
        /bin/bash -c "/scripts/export_template.sh $(GO_PIPELINE_NAME)"

generate_release_artifacts: generate_template
	tar zcf release_artifacts.tar.gz $(GOCD_PIPELINE_CONFIG_FILE) template-$(PROJECT).gocd.json
