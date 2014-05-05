from storages.backends.s3boto import S3BotoStorage

class StaticS3Backend(S3BotoStorage):
	location = 'm'

class MediaS3Backend(S3BotoStorage):
	location = 'upfiles'
