export default {
  settings: {
    title: "システム設定",
    description: "システム構成と管理者アカウント情報を管理します",
    uploadSettings: {
      title: "アップロード制限設定",
      description: "ファイルアップロードのサイズ制限とWebDAVアップロードモードを設定します",
      maxUploadSizeLabel: "最大アップロードファイルサイズ",
      maxUploadSizePlaceholder: "数値を入力",
      maxUploadSizeHint: "単一ファイルの最大アップロードサイズ制限を設定します",
      unitKB: "KB",
      unitMB: "MB",
      unitGB: "GB",
      footerHint: "変更後は即時適用され、すべてのユーザーのファイルアップロードに影響します"
    },
    webdavSettings: {
      uploadModeLabel: "WebDAVアップロードモード",
      uploadModeHint: "WebDAVクライアントのアップロード処理方法を選択します。worker展開では直接アップロードモードのみを推奨します",
      modes: {
        direct: "直接アップロード",
        multipart: "マルチパートアップロード"
      }
    },
    adminSettings: {
      title: "管理者情報変更",
      description: "管理者ユーザー名とパスワードを変更します",
      newUsernameLabel: "新しいユーザー名",
      newUsernamePlaceholder: "新しいユーザー名を入力",
      newUsernameHint: "空白のままにするとユーザー名は変更されません",
      currentPasswordLabel: "現在のパスワード",
      currentPasswordPlaceholder: "現在のパスワードを入力",
      currentPasswordHint: "本人確認のため現在のパスワードを入力してください",
      newPasswordLabel: "新しいパスワード",
      newPasswordPlaceholder: "新しいパスワードを入力",
      newPasswordHint: "空白のままにするとパスワードは変更されません",
      footerHint: "変更後は自動的にログアウトされ、再ログインが必要です"
    },
    status: {
      success: "設定更新成功",
      processing: "処理中...",
      updateSettings: "設定を更新",
      updateAccount: "アカウントを更新",
      adminUpdateSuccess: "管理者情報更新成功、自動的にログアウトします",
      errors: {
        maxUploadSizeError: "最大アップロードサイズは0より大きくなければなりません",
        updateSettingsError: "システム設定の更新に失敗しました",
        currentPasswordRequired: "現在のパスワードを入力してください",
        newFieldRequired: "新しいユーザー名または新しいパスワードの少なくとも一方を入力してください",
        passwordSame: "新しいパスワードは現在のパスワードと同じにすることはできません",
        updateInfoError: "管理者情報の更新に失敗しました"
      }
    }
  }
};