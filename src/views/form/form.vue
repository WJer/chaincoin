<template>
	<div class="page-form">
		<mt-header fixed title="币金所" class="form-header"></mt-header>
		<div class="form-line-wrap">
			<div class="line"></div>
			<div class="text">填写收款信息</div>
			<div class="line"></div>
		</div>
		<div class="form-wrap">
			
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="less" scoped>
	.page-form {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 112px;
		background-color: #2a3452;
	}
	.form-header {
		font-size: 36px;
		height: 112px;
		padding: 0 30px;
		background-color: #2a3452;
	}
	.form-line-wrap {
		display: flex;
		margin: 0 37px;
		-webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
		.text {
			padding: 0 32px;
			color: #4d5b81;
			font-size: 30px;
			line-height: 68px;
		}
		.line {
			height: 1px;
			background-color: #4d5b81;
			-webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
		}
	}
</style>

