import logging
import logging.config
import yaml


def setup_logger_from_yaml(config_path="logging_config.yaml"):
    with open(config_path, "r") as f:
        config = yaml.safe_load(f)

    logging.config.dictConfig(config)
    return logging.getLogger("myapp")
