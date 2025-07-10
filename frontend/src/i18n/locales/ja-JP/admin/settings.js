export default {
  "settings": {
    "title": "システム設定",
    "description": "システム構成と管理者アカウント情報を管理します",
    "uploadSettings": {
      "title": "アップロード制限設定",
      "description": "ファイルアップロードのサイズ制限とWebDAVアップロードモードを構成します",
      "maxUploadSizeLabel": "最大アップロードサイズ",
      "maxUploadSizePlaceholder": "数値を入力",
      "maxUploadSizeHint": "単一ファイルの最大アップロードサイズを設定します",
      "unitKB": "KB",
      "unitMB": "MB",
      "unitGB": "GB",
      "footerHint": "変更は即時反映され、すべてのユーザーのファイルアップロードに影響します"
    },
    "webdavSettings": {
      "uploadModeLabel": "WebDAVアップロードモード",
      "uploadModeHint": "WebDAVクライアントのアップロード処理方法を選択します",
      "modes": {
        "auto": "自動モード（推奨）",
        "proxy": "事前署名付きアップロード",
        "multipart": "分割アップロード",
        "direct": "直接アップロード"
      }
    },
    "adminSettings": {
      "title": "管理者情報変更",
      "description": "管理者ユーザー名とパスワードを変更します",
      "newUsernameLabel": "新しいユーザー名",
      "newUsernamePlaceholder": "新しいユーザー名を入力",
      "newUsernameHint": "空白の場合はユーザー名を変更しません",
      "currentPasswordLabel": "現在のパスワード",
      "currentPasswordPlaceholder": "現在のパスワードを入力",
      "currentPasswordHint": "本人確認のため現在のパスワードを入力します",
      "newPasswordLabel": "新しいパスワード",
      "newPasswordPlaceholder": "新しいパスワードを入力",
      "newPasswordHint": "空白の場合はパスワードを変更しません",
      "footerHint": "変更後は自動的にログアウトされ、再ログインが必要です"
    },
    "status": {
      "success": "設定の更新に成功しました",
      "processing": "処理中...",
      "updateSettings": "設定を更新",
      "updateAccount": "アカウントを更新",
      "adminUpdateSuccess": "管理者情報の更新が成功しました。間もなく自動的にログアウトされます。",
      "errors": {
          "maxUploadSizeError": "最大アップロードサイズは0より大きくする必要があります",
          "updateSettingsError": "システム設定の更新に失敗しました",
          "currentPasswordRequired": "現在のパスワードを入力してください",
          "newFieldRequired": "新しいユーザー名または新しいパスワードのいずれかを少なくとも1つ入力してください",
          "passwordSame": "新しいパスワードは現在のパスワードと同じにできません",
          "updateInfoError": "管理者情報の更新に失敗しました"
      }
    }
  }
};